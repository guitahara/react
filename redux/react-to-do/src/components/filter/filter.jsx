import React from 'react';
import {connect} from 'react-redux';
import {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../../reducers/filters/actions';
import {setVisibilityFilter} from '../../reducers/filters/action-creator'

const Filter = ({activeFilter, handleFilter}) => (
    <div>
        <h3>Mostrar:</h3>
        {
            filterItems.map((item) => {
                if(item.action === activeFilter){
                    return <span key={item.action} style={{marginRight: 10}}>{item.label}</span>
                }
                return <a 
                            href='' 
                            key={item.action} 
                            onClick={handleFilter(item.action)} 
                            style={{marginRight: 10}}
                        >
                            {item.label}
                        </a>
            })
            
        }
    </div>
)

const filterItems = [
    {label:'Todos', action:SHOW_ALL},
    {label:'Finalizados', action: SHOW_COMPLETED},
    {label:'A Fazer', action: SHOW_ACTIVE}
]

const mapStateToProps = (state) => {
    return {
        activeFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleFilter:(filter) => (e) => {
        e.preventDefault()
        dispatch(setVisibilityFilter(filter))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter)