import ForgeUI, {ConfigForm,  Option, Select, TextField, useConfig} from '@forge/ui';


export const ConfigView= () => {
  
  return (
      <ConfigForm>
          <TextField name="title" label="Title"/> 
          <Select name="clock" label="Clock" >
            <Option value="24hr" label="24hr"/>
            <Option value="12hr" label="12hr" />
          </Select>
      </ConfigForm>
    );
};









