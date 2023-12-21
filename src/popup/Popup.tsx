const Popup = () => {
  return (
    <>
      <div className="w-60 h-40 flex flex-col items-center justify-center font-mono">
        <label htmlFor="languages" className="font-bold mb-2">
          Select target language:{' '}
        </label>
        <select id="language" name="target_lang" className="text-xs">
          <option value="JA" selected>
            Japanese
          </option>
          <option value="EN">English</option>
          <option value="ZH">Chinese</option>
          <option value="KO">Korean</option>
        </select>
      </div>
    </>
  );
};

export default Popup;
