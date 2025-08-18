import { useState } from 'react';

const RememberMeCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        id="rememberMe"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="h-4 w-4 rounded border-gray-300 text-[#9f3247] focus:ring-[#7b2334]"
      />
      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
        Remember me
      </label>
    </div>
  );
};

export default RememberMeCheckbox;