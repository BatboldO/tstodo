import React, { FC } from "react";

interface FormProps {
  open: boolean;
  handleClose: () => void;
}

const Form: FC<FormProps> = ({ open, handleClose }) => {
  return (
    <dialog open={open} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-blue-400 p-8 border rounded-md border-2 border-zinc-950">
        <h3 className="font-bold text-3xl text-black">New Task</h3>
        <div className="modal-action">
          <form method="dialog">
            <div className="my-3">
              <select className="select select-primary w-full max-w-xs">
                <div>Select priority</div>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <input placeholder="insert name"></input>
              


            </div>

            <div className="my-3">
              <button
                className="btn bg-blue-100 btn-outline btn-primary"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Form;