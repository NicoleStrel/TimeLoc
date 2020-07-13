import api from "@forge/api";
import { useAction } from "@forge/ui";
import { User } from "./types";

var moment = require('moment-timezone');

//exports
export const getUsers =async() =>{
    console.log ("Fetching the users ...");
    const response = await api
      .asApp()
      .requestJira(`/rest/api/3/users/search`);
  
    const data=await response.json();
    return data; 
};
export function getUserInfo(users, clock) { 
  var userlist:User[]= new Array();

  for (let i=0; i<users.length; i++){
      if (users[i].accountType=="atlassian" && users[i].active==true){
        //rpofile and timezone
        let profile=useAction(() => {}, async () => await getProfile(users[i].accountId)); 
        var timezone=profile[0].timeZone;

        //Time info
        let data= useAction(() => {}, async () => await getWorldTime(timezone)); 
        let time=getExactTime(data[0], clock);
        let abbrev=getabbrev(data[0]);
        let day=getday(data, timezone);
       
        //Fill user with content
        let user={accountid:users[i].accountId, timezone:timezone, localtime:time, abbrev:abbrev, day:day}; 
        userlist.push(user);
      }
  }
  return userlist;
}

//Profile of user- which includes self-declared Timezone
const getProfile =async(accountid) =>{
  const response = await api
    .asApp()
    .requestJira(`/rest/api/3/user?accountId=${accountid}`);

  const data=await response.json();
  return data; 
};

//World Time Api
const getWorldTime =async(timezone) =>{
  console.log ("World Time api call ...");
  const response = await api.fetch(
    `http://worldtimeapi.org/api/timezone/${timezone}`,
  ); 
  const data=await response.json();
  return data;
};

//Timezone abbrivation- EDT, AST, etc..
function getabbrev(data){
  return  data.abbreviation;
};


function getExactTime(data, clock) { 
  let datetime=data.datetime;

  for (let d=0; d<datetime.length; d++){
    if (datetime[d]=="T"){
      var hour =datetime.substring(d+1, d+3);
      
      //time types
      if (clock=="24hr"){
        var h=(hour/10)*10;
        console.log ("24hr h=", h);
        return h+datetime.substring(d+3, d+9); //8 is the length of the 24hr time attribute
      }
      else{
        var h = (hour%12)||12;
        var type = (hour< 12|| hour==24) ? " AM" : " PM";
        return h+datetime.substring(d+3, d+9)+type;
      }
      
    }
  }
};

function getday(data, timezone){
  let datetime=data.datetime;
  let d=moment(datetime);
  return d.tz(timezone).format('dddd');
}











