import React, { Component } from "react";

class Counter extends Component {
    state = {
        tags: ["tag1", "tag2", "tag3"]
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('Counter - updated');
        console.log('prevProps: ' + prevProps);
        console.log('prevState: ' + prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server .
        }
    }

    componentWillUnmount() {
        console.log('Counter - unmount');
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        return (
            <ul>
                {this.state.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    // handleIncrement = product => {
    //     console.log("Increment Clicked: " + this.state.value);
    //     this.setState({ value: this.state.value + 1 });
    // };

    render() {
        console.log('Counter - rendered')
        return (
            <div>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
}

export default Counter;
