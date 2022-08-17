
function MoodItem({ iconSrc, label, className, isActive, onMoodType }) {
    return ( 
        <div className="relative flex flex-col justify-center items-center w-[84px] h-[84px] p-2 bg-color-200 rounded-xl cursor-pointer"
            onClick={onMoodType}
        >
            <div className="absolute w-[150px] h-[150px] -top-12 -left-[32px]">
                <img 
                    src={iconSrc} 
                    className={`w-[150px] h-[150px] ${className} ${
						isActive ? 'opacity-100 brightness-100' : 'opacity-10 brightness-200'}`} alt="moodIcon" />
            </div>
            <p className="absolute bottom-[10px] opacity-30 text-base text-white">
                {label}
            </p>
        </div>
     );
}
// className="flex justify-center items-center w-10 h-10 pt-1"
export default MoodItem;