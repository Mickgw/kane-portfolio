import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md"

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordian">
      <div
        className="accordion-header"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="accordion-title-container">
          <div className={`accordion-title ${isOpen ? "open" : ""}`}>{title}</div>
          <div className="accordion-button">
            <MdKeyboardArrowRight className={`showmore-icon ${isOpen ? "open" : ""}`} />
          </div>
        </div>
        <div className="empty-div"/>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
