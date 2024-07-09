/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	const {title, buttonColor, bgColor} = attributes;

	return (
		<div { ...useBlockProps.save() } >
			<div className='spoiler-section-header'
				style={{
					borderBottomColor: buttonColor
				}}>
				<div
					className='spoiler-section-button'
					style={{
						backgroundColor: buttonColor
				}}>
					<span>SHOW</span>
					/
					<span className='spoiler-section-button-curr'>HIDE</span>
				</div>
				<p className='spoiler-section-title'>
					Spoilers for&nbsp; 
					<span
						style={{
							fontWeight: "bold",
							color:buttonColor
						}}>
						{title}
					</span>
				</p>
			</div>
			<div 
				className='spoiler-section-contents spoiler-section-hidden'
				style={{
					backgroundColor: bgColor
				}}
				>
					<div className='spoiler-section-inner'>
						<InnerBlocks.Content />
					</div>
			</div>
		</div>
	);
}
