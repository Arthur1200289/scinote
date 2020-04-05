import * as React from "react";
import { Input, Upload, Button, message } from 'antd';
import {SearchProps} from 'antd/lib/input/Search';
import {UploadProps} from "antd/lib/upload/Upload"
import {Paper} from "../model";
import {PaperCard} from "../component/paper";
import {api} from "../service/api";
const { Search } = Input;

interface HomeViewState {
    papers: Paper[];
    search: string;
}

export class HomeView extends React.Component<any, HomeViewState> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {papers: [], search: ""};
    }

    private search(query: string, event: any): void {
        if(!query.trim()) return;
        api.search(query)
            .then(val => this.addResults(val))
            .catch(err => console.log(err));
    }

    private addResults(results: Paper[]) {
        const papers = this.state.papers.concat(results);
        this.setState({...this.state, papers: papers, search: ""});
    }

    private searchInput(): React.ReactElement {
        const ph = "Enter article title, doi, url etc.";
        const props: SearchProps = {
            value: this.state.search,
            placeholder: ph,
            size: "large",
            onChange: val => this.setState({...this.state, search: val.target.value}),
            onSearch: (val, event) => this.search(val, event)
        };
        return <Search {...props} />
    }

    private results(): React.ReactElement {
        const cards = [...this.state.papers].reverse().map((val, idx) => <PaperCard paper={val} key={idx.toString()} />);
        return (
            <div className="results-panel">
                {cards}
            </div>
        )
    }

    private uploadInput(): React.ReactElement {
        const props: UploadProps = {
            name: "file",
            action: api.parseUrl(),
            showUploadList: false,
            onChange: (info) => {
                if (info.file.status === 'done') {
                    const response: any = info.file.response;
                    if(response.error) {
                        message.error(response.error);
                    } else {
                        this.addResults([response.paper]);
                        message.success(`${info.file.name} file uploaded successfully`);
                    }
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        };
        return (
            <span className="search-upload">or&nbsp;
                <Upload {...props}>
                    <Button type="link">upload article</Button>
                </Upload>
            </span>
        )
    }

    render(): React.ReactElement {
        return (
            <div className="search-panel">
                <h1 className="search-title">Sciggle</h1>
                <div className="search-input">
                    {this.searchInput()}
                    {this.uploadInput()}
                </div>
                {this.results()}
            </div>
        )
    }
}