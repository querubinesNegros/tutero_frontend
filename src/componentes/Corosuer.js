import React, { Component } from "react";

class Corosuer extends Component {
    constructor() {
        super();

        this.viewImage = this.viewImage.bind(this);
    }
    viewImage(index) {
        const urlToDownload = this.props.images[index].filepable.path.url;
        console.log(urlToDownload);
        setTimeout(() => {
          const response = {
            file: urlToDownload
          };
          // server sent the url to the file!
          // now, let's download:
          window.open(response.file);
          // you could also do:
          // window.location.href = response.file;
        }, 100);
      }
    render() {

        const targets = this.props.images.length;
        var classIner = "";
        let targetHTML = [];
        let imageHTML = [];

        console.log(targets);
        for (var i = 0; i < targets; i++) {
            targetHTML.push(
                <li data-target="#carousel-example-1z" data-slide-to={i} />
            );
            if (i == 0) {
                classIner = "carousel-item active";
            } else {
                classIner = "carousel-item";
            }
            imageHTML.push(
                <div className={classIner}>
                    <img
                        className="d-block w-100"
                        src={this.props.images[i].filepable.path.url}
                        onClick = {this.viewImage.bind(this,i)}
                    />
                </div>
            );
        }
        return (
            <div>
                <div
                    id="carousel-example-1z"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">{targetHTML}</ol>
                    <div className="carousel-inner" role="listbox">
                        {imageHTML}
                    </div>

                    <a
                        className="carousel-control-prev"
                        href="#carousel-example-1z"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carousel-example-1z"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Corosuer;
