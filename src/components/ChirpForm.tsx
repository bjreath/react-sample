import * as React from "react";

interface Props {
}

interface State {
  chirpAuthor: string;
  chirpText: string;
}

export class ChirpForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      chirpAuthor: "Brian Reath",
      chirpText: ""
    };

    this.handleChirpChange = this.handleChirpChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.chirpText}
          onChange={this.handleChirpChange}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Chirp"
        />
      </form>
    );
  }

  private handleChirpChange(event) {
    event.preventDefault();
    this.setState({ chirpText: event.target.value } as State);
  }

  private handleSubmit(event) {
    event.preventDefault();
    this.setState({ chirpText: "" } as State);
  }
}