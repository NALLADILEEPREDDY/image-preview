import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './theme.scss';

export default function Themes() {
    const dispatch = useDispatch(); 
    const changeTheme = useCallback(
        (event) => dispatch({ type: 'CHANGE_THEME',payload:event.target.value }),
        [dispatch]
      );   
    return (
        <div className="emulated-flex-gap">
           <button style={{backgroundColor: '#F31D44'}} className="button" value="#F31D44" onClick={changeTheme}/> 
           <button style={{backgroundColor: '#1D3EF3'}} className="button" value="#1D3EF3" onClick={changeTheme}/> 
           <button style={{backgroundColor: '#27F31D'}} className="button" value="#27F31D" onClick={changeTheme}/> 
           <button style={{backgroundColor: '#F3EC1D'}} className="button" value="#F3EC1D" onClick={changeTheme}/> 
        </div>
    )
}
