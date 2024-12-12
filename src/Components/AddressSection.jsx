/* eslint-disable react/prop-types */
import InputField from "./InputField";

const AddressSection = ({ title }) => (
  <fieldset className="border border-green-600 p-4 mb-4">
    <legend className="px-2 text-lg text-green-700">{title}</legend>
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
      <InputField label="Village/House, Road" name="village" />
      <InputField label="Post/Block, Section" name="post" />
      <InputField label="Thana" name="thana" />
      <InputField label="District" name="district" />
    </div>
  </fieldset>
);

export default AddressSection;
