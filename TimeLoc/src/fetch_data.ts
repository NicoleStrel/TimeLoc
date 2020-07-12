import api from "@forge/api";
import { useAction } from "@forge/ui";
import { User } from "./types";

export const getUsers =async() =>{
    const response = await api
      .asApp()
      .requestJira(`/rest/api/3/users/search`);
  
    const data=await response.json();
    return data; 
};

export const getProfile =async(accountid) =>{
  const response = await api
    .asApp()
    .requestJira(`/rest/api/3/user?accountId=${accountid}`);

  const data=await response.json();
  return data; 
};

export function getUserInfo(users) { 
  var userlist:User[]= new Array();

  for (let i=0; i<users.length; i++){
      if (users[i].accountType=="atlassian"){
        let profile=useAction(() => {}, async () => await getProfile(users[i].accountId)); 
        let user={accountid:users[i].accountId, timezone:profile[0].timeZone};
        userlist.push(user);
      }
  }
  return userlist;
}









