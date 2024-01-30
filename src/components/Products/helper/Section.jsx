import PropTypes from "prop-types";
const Section = ({ children }) => {
  return <section className="flex flex-col bg-silver dark:bg-dark pt-24">{children}</section>;
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Section;
