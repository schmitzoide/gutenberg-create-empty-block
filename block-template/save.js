/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */

const Save = (props) => {
  const blockProps = useBlockProps.save({
    className: ``,
  });

  return (
    <div {...blockProps}>
      <p>Block Template from save.js side.</p>
    </div>
  );
};

export default Save;
