import React, { useEffect } from "react";
//import somePlugin from "plugin";

export const Effect = () => {
    //чтобы не теряться, необходимо оставлять комментарии, что делает useEffect
    useEffect(() => {
        const handler = () => {
            document.addEventListener("click", handler);

            return () => {
                document.removeChild("click", handler);
            };
        };
    }, []);

    //или формировть именную функцию внутри
    useEffect(function initPlagin() {
        somePlugin.init();

        return () => {
            somePlugin.destroy();
        };
    }, []);

    return <div></div>;
};
