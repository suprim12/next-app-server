import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setactivedropdown } from '../store/actions/themeAction';

const CustomDropdown = (props) => {
    const dispatch = useDispatch();
    const { activedropdown } = useSelector(state => state.theme);
    const { droddownbtn, target } = props;
    const handletoggledropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (activedropdown === target) {
            dispatch(setactivedropdown(null));
        } else {
            dispatch(setactivedropdown(target));
        }
    }
    return (
        <div className={activedropdown === target ? "dropdown active" : "dropdown"}>
            <button type="button" onClick={handletoggledropdown} className="dropdowntoggle">
                {droddownbtn}
            </button>
            {activedropdown === target &&
                <div className="dropdown-menu">
                    {props.children}
                </div>
            }
        </div>
    )
}

export default CustomDropdown
