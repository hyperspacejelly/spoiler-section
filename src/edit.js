/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls, PanelColorSettings, RichText } from '@wordpress/block-editor';

import { RangeControl, PanelBody, SelectControl, ColorPicker} from "@wordpress/components"

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/image'];

	const { title, buttonColor, bgColor, txtColor } = attributes;

	const hexToRGB = (hex, transp) => {
		const r = parseInt(hex.slice(1,3), 16);
		const g = parseInt(hex.slice(3,5), 16);
		const b = parseInt(hex.slice(5,7), 16);

		return `rgb(${r}, ${g}, ${b}, ${transp})`;
	}

	const onChangeTitle = ( val ) =>{
		setAttributes({title: val});
	}

	const onChangeColor = ( val )=>{
		setAttributes({buttonColor: val});
		setAttributes({bgColor: hexToRGB(val, 0.6) });
	}

	const onChangeTxtColor = ( val )=>{
		setAttributes({txtColor: val});
	}

	return (
		<>
			<InspectorControls>
				<PanelBody>
					{/* <ColorPicker 
						color={buttonColor}
						onChange={onChangeColor}
						defaultValue={buttonColor}
					/> */}
					<PanelColorSettings 
						title='Color'
						colorSettings={
							[{
								value: buttonColor,
								onChange: onChangeColor,
								label:"Spoiler block color"
							}]
						}
					/>
					<PanelColorSettings 
						title='Inner text color'
						colorSettings={
							[{
								value: txtColor,
								onChange: onChangeTxtColor,
								label:"Inner text color"
							}]
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} >
				<div 
					className='spoiler-section-header'
					style={{
						borderBottomColor: buttonColor
				}}>
					<div
						className='spoiler-section-button'
						style={{
							backgroundColor: buttonColor,
							color:txtColor==""?"inherit":txtColor,
							userSelect: "none"
					}}>
						SHOW/HIDE
					</div>
					<div 
						style={{
							display: 'flex',
							alignItems: "center",
							width: "fit-content"
					}}>
						<span
						   style={{
							padding: "0px 5px",
							userSelect: "none"
						}}>
							Spoilers for: 
						</span>
						<RichText 
							tagName='p' 
							onChange={onChangeTitle}
							value={title}
							placeholder='spoiler for ?'
							style={{
								color:buttonColor,
								margin:"0px"
							}}
						/>
					</div>
				</div>
				<div
					className='editor-spoiler-section-inner'
					style={{
						padding:"1px 1em",
						backgroundColor: bgColor,
						color:txtColor==""?"inherit":txtColor
				}}>
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS}/>
				</div>
			</div>
		</>	
	);
}
