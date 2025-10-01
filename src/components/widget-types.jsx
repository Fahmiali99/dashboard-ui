import React, { useState } from 'react';
import { Tooltip } from 'flowbite-react';

const TrackedProgressBar = ({ percentage, result, desc }) => {
    const [popoverStyle, setPopoverStyle] = useState({ left: `${percentage}%`, transform: 'translateX(-50%)' });
    const [mouseActive, setMouseActive] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mousePercentage = Math.min(100, Math.max(0, (mouseX / rect.width) * 100));
        
        setPopoverStyle({left: `${mousePercentage}%`, transform: 'translateX(-50%)'});
        setMouseActive(true);
    };

    const handleMouseLeave = () => {
        setPopoverStyle({ left: `${percentage}%`, transform: 'translateX(-50%)' });
        setMouseActive(false);
    };

    return (
        <div 
            className="relative w-full h-[7px] cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full bg-[#EBF0F5] rounded-full h-[7px]" />
            <div className="absolute top-0 left-0 bg-[#1767B2] h-[7px] rounded-full" style={{ width: `${percentage}%` }}/>
            <div style={popoverStyle} className="absolute -top-[30px] transition-none">
                <div className="relative bg-white border border-gray-200 rounded-lg py-1 px-3 text-xs font-bold text-gray-900 shadow-md">
                    {result}
                    <div className="absolute left-1/2 bottom-[-4px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] 
                        border-l-transparent border-r-transparent border-t-white shadow-md" 
                        style={{ transform: 'translateX(-50%)' }}
                    />
                </div>
            </div>
        </div>
    );
};

const TrackedPieChart = ({ percent, result, radius, strokeWidth, circumference, offset, svgSize }) => {
    const center = svgSize / 2;
    const trackingRadius = radius + strokeWidth / 2;

    const [popover, setPopover] = useState({
        x: center,
        y: center - trackingRadius,
        visible: true
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - center;
        const mouseY = e.clientY - rect.top - center;
        const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

        if (distance > radius - strokeWidth && distance < radius + strokeWidth) {
            let angle = Math.atan2(mouseY, mouseX);
            const popoverX = center + trackingRadius * Math.cos(angle);
            const popoverY = center + trackingRadius * Math.sin(angle);
            setPopover({ x: popoverX, y: popoverY, visible: true });
            return;
        }
    };

    const handleMouseLeave = () => {
        setPopover({
            x: center,
            y: center - trackingRadius,
            visible: true
        });
    };

    return (
        <div 
            className="relative flex-shrink-0 cursor-pointer" 
            style={{ width: `${svgSize}px`, height: `${svgSize}px` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg className="w-full h-full rotate-50"> 
                <circle
                    cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                    className="text-[#DBE8F4]" fill="transparent" stroke="currentColor"
                />
                <circle
                    cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                    className="text-[#1767B2]" strokeDasharray={circumference} strokeDashoffset={offset}
                    fill="transparent" stroke="currentColor" 
                />
            </svg>
            
            {popover.visible && (
                <div
                    className="absolute transition-none"
                    style={{ 
                        left: `${popover.x}px`, 
                        top: `${popover.y - 3}px`, 
                        transform: 'translate(-50%, -100%)'
                    }}
                >
                    <div className="relative bg-white border border-gray-200 rounded-lg py-1 px-3 text-xs font-bold text-gray-900 shadow-md">
                        {result}
                        <div className="absolute left-1/2 bottom-[-4px] w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] 
                            border-l-transparent border-r-transparent border-t-white shadow-md" 
                            style={{ transform: 'translateX(-50%)' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

function WidgetTypes({ type, item_chart }) {
    const DetailPopover = () => (
        <Tooltip 
            content={
                <div className="p-3 space-y-2 text-gray-900 text-sm w-64">
                    <h3 className="font-semibold">Info {item_chart?.title}</h3>
                    <p className="text-gray-600">This report helps navigate the cumulative growth of activity.</p>
                    <a href="#" className="flex items-center font-medium text-blue-600 hover:underline text-xs">Read more</a>
                </div>
            }
            placement="left"
            trigger="click" 
            style="light"
            className="!bg-white !border !border-gray-200 !rounded-lg !shadow-xl !max-w-xs"
        >
            <div className="text-2xl text-gray-900 hover:text-[#1767B2] cursor-pointer">
                {item_chart.icon} 
            </div>
        </Tooltip>
    );

    if (type === "progress") {
        const percentString = item_chart.chart_data?.chart_result?.replace('%', '') || "0";
        const percentage = parseFloat(percentString) || 0;

        return (
            <div className='py-4'>
                <div className='px-6'>
                    <div className='flex justify-between items-center'>
                        <h1 className="text-sm font-medium text-gray-900">{item_chart?.title}</h1>
                        <DetailPopover /> 
                    </div>
                    <p className="text-[38px] font-bold text-gray-900">{item_chart?.result}</p>
                </div>

                <hr className='border-t border-[#DBE8F4] mt-2 mb-4' />

                <div className='px-6 space-y-2 pt-3'>
                    <TrackedProgressBar 
                        percentage={percentage} 
                        result={item_chart.chart_data?.chart_result}
                        desc={item_chart.chart_data?.desc}
                    />
                    <p className="text-xs font-bold text-gray-900">{item_chart.chart_data?.desc}</p>
                </div>
            </div>
        )
    } else if (type === "pie-chart") {
        const radius = 35; 
        const strokeWidth = 8;
        const circumference = 2 * Math.PI * radius;
        const percentString = item_chart.chart_data?.chart_result?.replace('%', '') || "0";
        const percent = parseInt(percentString) || 0;
        const offset = circumference - (circumference * percent) / 100;
        const svgSize = radius * 2 + strokeWidth + 2;

        return (
            <div className='py-4'>
                <div className='px-6'>
                    <div className='flex justify-between items-center'>
                        <h1 className="text-sm font-medium text-gray-900">{item_chart?.title}</h1>
                        <DetailPopover /> 
                    </div>
                    <p className="text-[38px] font-bold text-gray-900">{item_chart?.result}</p>
                </div>
                
                <div className='px-6 w-full flex justify-between items-center gap-4 mt-2'>
                    <div className="text-end text-xs space-y-1">
                        <div><span className='font-bold text-gray-900'>{item_chart.chart_data?.daily}</span> <span className='text-gray-500'>Daily Goal</span></div>
                        <div><span className='font-bold text-gray-900'>{item_chart.chart_data?.weekly}</span> <span className='text-gray-500'>This week</span></div>
                    </div>
                    
                    <TrackedPieChart 
                        percent={percent}
                        result={item_chart.chart_data?.chart_result}
                        radius={radius}
                        strokeWidth={strokeWidth}
                        circumference={circumference}
                        offset={offset}
                        svgSize={svgSize}
                    />
                </div>
            </div>
        )
    } else {
        return <div>Unknown Widget Type</div>
    }
}

export default WidgetTypes
