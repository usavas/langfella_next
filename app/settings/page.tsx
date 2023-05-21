import SettingItem from "./SettingItem";

function Settings() {
  return (
    <div className="m-4">
      <h4>Settings</h4>
      <ul className=" divide-y divide-gray-200">
        <SettingItem title="Dark Mode" type="checkbox" />
      </ul>
    </div>
  );
}

export default Settings;
