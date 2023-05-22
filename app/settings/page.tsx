import DarkModeSetting from "./DarkModeSetting";

function Settings() {
  return (
    <div className="m-4">
      <h4>Settings</h4>
      <ul className=" divide-y divide-gray-200">
        <DarkModeSetting type="checkbox" />
      </ul>
    </div>
  );
}

export default Settings;
