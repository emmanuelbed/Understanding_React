function Popup({ title, cancelPopup }) {
  function confirmClicked() {
    console.log("Confirm button clicked");
  }

  function cancelClicked() {
    cancelPopup()
  }
  return (
    <>
      <div className="popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={() => {
              confirmClicked();
            }}
          >
            Confirm
          </button>
          <button
            className="popup__btn popup__btn--cancel"
            onClick={() => {
              cancelClicked();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}
export default Popup;
