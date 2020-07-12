import ForgeUI, {Text,useAction, Fragment, Avatar, Table, Head, Cell, Row} from '@forge/ui';
import { getUsers,getUserInfo } from "./fetch_data";

export const AppView = () => {
  //usernames
  var all_users = useAction(() => {}, async () => await getUsers()); 
  var user_info=getUserInfo(all_users[0]);

  return ( 
    <Fragment>
        <Table>
          <Head>
            <Cell>
              <Text content="User" />
            </Cell>
            <Cell>
              <Text content="Time Zone" />
            </Cell>
          </Head>
          {user_info.map(user => (
            <Row>
              <Cell>
                <Avatar accountId={user.accountid} />
              </Cell>
              <Cell>
                <Text content={user.timezone} />
              </Cell>
            </Row>
          ))}
        </Table>    
    </Fragment>
  );

}
