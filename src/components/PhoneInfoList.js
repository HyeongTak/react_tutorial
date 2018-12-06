import React, { Component } from 'react';
import PhoneInfo from './PhoneForm';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;