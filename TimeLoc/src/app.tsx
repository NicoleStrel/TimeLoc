import ForgeUI, {Text,useAction, Fragment, Avatar, Table, Head, Cell, Row, useConfig, Image} from '@forge/ui';
import { getUsers,getUserInfo } from "./fetch_data";

export const AppView = () => {
  //Fetch  user data
  const config = useConfig() || {};
  console.log("Orig config: ", config.clock, ", ", config.title);
  var all_users = useAction(() => {}, async () => await getUsers()); 
  var user_info=getUserInfo(all_users[0], config.clock);
  
  const svg_night=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#355ecf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const svg_day=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8e71c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`;
  const timelabel="Live Time("+config.clock+")";
  
  
  const findSVG= (localtime) => {
    //day: between 6am- 9pm
    //night: between 9pm-6am
    let idx=localtime.indexOf(":");
    var  hour = localtime.substring(0,idx); 
   
    //24hr
    if (config.clock=="24hr" ){
      if (hour>=6 && hour<21 ){
        return svg_day;
      }
      else{
        return svg_night;
      }
    }
    //12hr
    else{
      var postfix= localtime.slice(-2);

      if ((postfix=="AM" && hour>=6) || (postfix=="PM" && hour<9)){
        return svg_day;
      }
      else{
        return svg_night;
      }
    }
  }
  

  return ( 
    <Fragment >
       <Text content={config.title} />
        <Table>
          <Head>
            <Cell>
              <Text content="User" />
            </Cell>
            <Cell>
              <Text content="Status" />
            </Cell>
            <Cell>
              <Text content="Location" />
            </Cell>
            <Cell>
              <Text content="Time Zone" />
            </Cell>
            <Cell>
              <Text content={timelabel} />
            </Cell>
            <Cell>
              <Text content="Day" />
            </Cell>
          </Head>
          {user_info.map(user => (
            <Row>
              <Cell>
                <Avatar accountId={user.accountid} />
              </Cell>
              <Cell>
                <Image
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(findSVG(user.localtime))}`} /*findSVG(user.localtime, user.clock)*/
                  alt='Icon'
                /> 
              </Cell>
              <Cell>
                <Text content={user.timezone} />
              </Cell>
              <Cell>
                <Text content={user.abbrev} />
              </Cell>
              <Cell>
                <Text content={user.localtime} />
              </Cell>
              <Cell>
                <Text content={user.day} />
              </Cell>

            </Row>
          ))}
        </Table> 
    </Fragment>
  );

}

