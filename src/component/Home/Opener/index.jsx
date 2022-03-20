import { Tabs } from "antd";
import React from "react";
import {
  Choose,
  Title,
  Container,
  Wrap,
  Search,
  Input,
  SearchIcon,
  AdvanSearchIcon,
  Button,
} from "./style";
import "./style.css";

export const Opener = () => {
  const { Option } = Choose;

  function callback(key) {
    console.log(key);
  }

  return (
    <Container>
      <Container.TitleHead>It's great to be home!</Container.TitleHead>
      <Container.Header>Find Your Perfect Home</Container.Header>

      <Wrap defaultActiveKey="1" onChange={callback}>
        <Wrap.TabPane tab="Buy" key="1">
          <Container.Box>
            <Container.Item>
              <Title.Item>TYPE</Title.Item>

              <Choose
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Choose>
            </Container.Item>
            <Container.Item>
              <Title.Item>LOCATION</Title.Item>

              <Choose
                showSearch
                style={{ width: 200 }}
                placeholder="All Cities"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">City 1</Option>
                <Option value="2">City 2</Option>
                <Option value="3">City 3</Option>
                <Option value="4">City 4</Option>
                <Option value="5">City 5</Option>
                <Option value="6">City 6</Option>
              </Choose>
            </Container.Item>
            <Container.Item>
              <Title.Item>SEARCH</Title.Item>
              <Search>
                <Input placeholder="Enter keywords" />
                <SearchIcon />
              </Search>
            </Container.Item>
            <Container.Item>
              <AdvanSearchIcon />
            </Container.Item>
            <Container.Item>
              <Title.AdvSearch>Advanced Search</Title.AdvSearch>
            </Container.Item>
            <Button>
              <SearchIcon big={"true"} /> Search
            </Button>
          </Container.Box>
        </Wrap.TabPane>
        <Wrap.TabPane tab="Rent" key="2">
          <Container.Box>
            <Container.Item>
              <Title.Item>TYPE</Title.Item>

              <Choose
                showSearch
                style={{ width: 200 }}
                placeholder="Property Type"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Choose>
            </Container.Item>
            <Container.Item>
              <Title.Item>LOCATION</Title.Item>

              <Choose
                showSearch
                style={{ width: 200 }}
                placeholder="All Cities"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">City 1</Option>
                <Option value="2">City 2</Option>
                <Option value="3">City 3</Option>
                <Option value="4">City 4</Option>
                <Option value="5">City 5</Option>
                <Option value="6">City 6</Option>
              </Choose>
            </Container.Item>
            <Container.Item>
              <Title.Item>SEARCH</Title.Item>
              <Search>
                <Input placeholder="Enter keywords" />
                <SearchIcon />
              </Search>
            </Container.Item>
            <Container.Item>
              <AdvanSearchIcon />
            </Container.Item>
            <Container.Item>
              <Title.AdvSearch>Advanced Search</Title.AdvSearch>
            </Container.Item>
            <Button>
              <SearchIcon big={"true"} /> Search
            </Button>
          </Container.Box>
        </Wrap.TabPane>
        <Wrap.TabPane tab="Sold" key="3">
          <Container.Box>
            <Container.Item>
              <Title.Item>TYPE</Title.Item>

              <Choose
                showSearch
                style={{ width: 200 }}
                placeholder="Property Type"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Choose>
            </Container.Item>
            <Container.Item>
              <Title.Item>LOCATION</Title.Item>

              <Choose
                showSearch
                style={{ width: 200 }}
                placeholder="All Cities"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">City 1</Option>
                <Option value="2">City 2</Option>
                <Option value="3">City 3</Option>
                <Option value="4">City 4</Option>
                <Option value="5">City 5</Option>
                <Option value="6">City 6</Option>
              </Choose>
            </Container.Item>
            <Container.Item>
              <Title.Item>SEARCH</Title.Item>
              <Search>
                <Input placeholder="Enter keywords" />
                <SearchIcon />
              </Search>
            </Container.Item>
            <Container.Item>
              <AdvanSearchIcon />
            </Container.Item>
            <Container.Item>
              <Title.AdvSearch>Advanced Search</Title.AdvSearch>
            </Container.Item>
            <Button>
              <SearchIcon big={"true"} /> Search
            </Button>
          </Container.Box>
        </Wrap.TabPane>
      </Wrap>
    </Container>
  );
};

export default Opener;
