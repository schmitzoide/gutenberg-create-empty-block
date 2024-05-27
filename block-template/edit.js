/**
 * WordPress dependencies.
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies.
 */
import "./editor.scss";

/**
 * Edit component.
 * @param {Object} props Props.
 * @returns {Object} JSX Component.
 */
const Edit = (props) => {
  const blockProps = useBlockProps({
    className: ``,
  });

  return (
    <div {...blockProps}>
      <p>Block Template edit side.</p>
    </div>
  );
};
export default Edit;
