const Popup = () => {
  document.body.className = 'w-[15rem] h-[15rem]';

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <p>Select target language: </p>
        <select name="target_lang">
          <option value="JA">JA</option>
          <option value="EN">EN</option>
          <option value="ZH">ZH</option>
          <option value="KO">KO</option>
        </select>
      </div>
    </>
  );
};

export default Popup;
