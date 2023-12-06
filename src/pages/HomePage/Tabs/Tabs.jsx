import React from "react";

function Tabs({ tabId, setTabId, tabs }) {
    return (
        <div className="Tabs flex items-center justify-evenly sticky top-0 pt-5 pb-3 lg:pt-20 bg-white overflow-y-auto gap-2">
            {Object.keys(tabs).map((tabKey) => {
                const tabValue = tabs[tabKey];
                return (
                    <div
                        key={tabKey}
                        className={` cursor-pointer hover:opacity-100
                        ${tabId === tabValue ? " opacity-100" : " opacity-50"}
                        `}
                    >
                        <p
                            className={`title text-normal px-3 py-1 sm:px-10 sm:py-3 
                            ${tabId === tabValue ? " text-blue-700" : ""}
                            `}
                            onClick={() => {
                                setTabId(tabValue);
                            }}
                        >
                            {tabValue}
                        </p>
                        <div
                            className={`w-full h-[2px] rounded-md
                        ${tabId === tabValue ? " bg-blue-700" : " bg-black"}
                        `}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}

export default Tabs;
