import * as React from 'react';

export interface IProps {
    name: string;
}

class Name extends React.Component<IProps> {
    public render() {
        return <span>{this.props.name}</span>
    }
}

export default Name;