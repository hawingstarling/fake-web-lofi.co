
function MoodItem({ iconSrc, label, className, classNameDiv, wrapperModel, isActive, onMoodType }) {
    return ( 
        <div className={`relative flex flex-col justify-center items-center ${wrapperModel ? 'w-[84px] h-[84px] p-2 bg-color-200' : 'w-[60px] h-[55px]'} bg-color-100 rounded-xl cursor-pointer`}
            onClick={onMoodType}
        >
            <div className={`absolute ${classNameDiv}`}>
                <img 
                    src={iconSrc} 
                    className={`w-[150px] h-[150px] ${className} ${
						isActive ? 'opacity-100 brightness-100' : 'opacity-10 brightness-200'}`} alt="moodIcon" 
                />
            </div>
            <p className="absolute bottom-[10px] opacity-30 text-base text-white">
                {label}
            </p>
        </div>
     );
}
// className="flex justify-center items-center w-10 h-10 pt-1"
export default MoodItem;