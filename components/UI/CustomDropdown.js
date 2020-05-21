import { useDispatch, useSelector } from 'react-redux';
import { setactivedropdown } from '../../store/actions/themeAction';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
const CustomDropdown = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
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
    useEffect(() => {
        dispatch(setactivedropdown(null));
    }, [router]);
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
