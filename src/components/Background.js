import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Background() {
    const { background } = useContext(AppContext)

    return ( 
		// <div className='absolute inset-0'>
		// 	<div className='relative w-full h-full'>
		// 		<div
		// 			className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
		// 				background.show1 ? 'opacity-100' : 'opacity-0'
		// 			}`}
		// 		>
		// 			<video
		// 				src={background.link1}
		// 				autoPlay
		// 				muted
		// 				loop
		// 				playsInline
		// 				className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full min-h-full object-cover lg:aspect-video'
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
		<video
			src={background.link1}
			autoPlay
			muted
			loop
			playsInline
		/>
     );
}

export default Background;