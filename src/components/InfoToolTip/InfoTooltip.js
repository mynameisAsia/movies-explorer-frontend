import React from "react";

function InfoTooltip({ isTooltipVisible, tooltipMessage }) {
    return (
        <div className={`tooltip ${isTooltipVisible ? 'tooltip_visible' : ''}`}>
            <p className={`tooltip__info ${tooltipMessage.status === 'error' ? 'tooltip__info_error' : 'tooltip__info_ok'}`}>{tooltipMessage.message}</p>
        </div>
    )
}

export default InfoTooltip;