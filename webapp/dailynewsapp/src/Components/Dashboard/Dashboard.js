import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import Card from '../card/Card';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  ButtonGroup,
  FormControl,
  InputGroup,
  Modal,
} from 'react-bootstrap';
export default function Dashboad({ setIsAuthenticated, isAuthenticated }) {
  const [news, setNews] = useState([]);
  const [switchToSearch, setSwitchToSearch] = useState(false);
  const [input, setInput] = useState('');
  let history = useHistory();
  const { showModal } = useParams();
  const [endPoint, setEndPoint] = useState(1);
  const [country, setCountry] = useState('in');
  const [category, setCategory] = useState('');
  const [newSource, setNewSource] = useState('');
  const [query, setQuery] = useState('');
  const [pageSize, setPageSize] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    //Check whether it is authenticated or not
    if (showModal) handleShow();
    fetch('http://localhost:3001/auth/v1/isAuthenticated', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // if data authenticated then fetch all data
        if (data.isAuthenticated || isAuthenticated) {
          fetch(
            'https://newsapi.org/v2/everything?q=covid&apiKey=c9c7a345e2c34368a719830f6ec55c90&language=en&page=1'
          )
            .then((res) => res.json())
            .then((ele) => setNews(ele.articles));
        } else {
          //if data not authenticated pushback to login
          if (!isAuthenticated) history.push('/login');
        }
      });

    if (localStorage.getItem('user')) {
      setIsAuthenticated(true);
    } else {
      if (!isAuthenticated) history.push('/login');
    }
  }, []);

  //Categories function
  const handleCategories = (categories) => {
    // setDisableButton(false);
    if (categories === 'todaytrending') {
      fetch(
        'https://newsapi.org/v2/everything?q=covid&apiKey=c9c7a345e2c34368a719830f6ec55c90&language=en&page=1'
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
      document.querySelectorAll('nav li').forEach((ele) => {
        ele.classList.remove('active');
        if (ele.classList.contains(categories)) ele.classList.add('active');
      });
      return;
    }
    if (categories !== 'saved') {
      fetch(
        `https://newsapi.org/v2/top-headlines?category=${categories}&apikey=c9c7a345e2c34368a719830f6ec55c90&language=en&page=1`
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
    } else {
      fetch(` http://localhost:3001/news`)
        .then((res) => res.json())
        .then((data) => setNews(data));
    }
    //toggle active link
    document.querySelectorAll('nav li').forEach((ele) => {
      ele.classList.remove('active');
      if (ele.classList.contains(categories)) ele.classList.add('active');
    });
  };
  // Search function
  const handleSubmit = () => {
    if (!input) return setSwitchToSearch(false);
    fetch(
      `https://newsapi.org/v2/everything?q=${input}&apiKey=c9c7a345e2c34368a719830f6ec55c90&language=en&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.articles.length === 0) {
          alert('Enter valid news name');
          return;
        }
        //to all remove active link
        document.querySelectorAll('nav li').forEach((ele) => {
          ele.classList.remove('active');
        });
        setNews(data.articles);
      });
  };
  //Save function
  const saveFunction = (newsProp) => {
    fetch('http://localhost:3001/api/v1/news', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(newsProp),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(newsProp);
    // setDisableButton(false);
  };
  // Filter functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmitFilter = () => {
    if (!(pageSize >= 20 && pageSize <= 100) && endPoint !== 3) {
      if (!pageSize) {
        setPageSize(20);
        console.log('pageSize', pageSize);
      } else {
        alert(
          'Page size minimum size is 20 and max size is 100 please enter valid pagesize'
        );
        return;
      }
    }
    let title;
    if (endPoint === 1) {
      title = 'top-headlines';
    } else if (endPoint === 2) {
      title = 'everything';
    } else {
      title = 'sources';
    }
    const urlContst = `https://newsapi.org/v2/${title}?${
      country !== '' && newSource === ''
        ? endPoint !== 2
          ? 'country=' + country
          : ''
        : endPoint === 1 && newSource === ''
        ? 'country=in'
        : ''
    }${category !== '' && newSource === '' ? '&category=' + category : ''}${
      newSource !== '' ? 'sources=' + newSource : ''
    }${query !== '' ? (endPoint !== 2 ? '&q=' + query : 'q=' + query) : ''}${
      pageSize !== 0 ? '&pageSize=' + pageSize : ''
    }${
      pageNo !== 0 ? '&page=' + pageNo : ''
    }&apiKey=c9c7a345e2c34368a719830f6ec55c90`;
    fetch(urlContst)
      .then((res) => res.json())
      .then((data) => {
        console.log(urlContst);
        console.log(endPoint);
        console.log(data);
        if (endPoint !== 3) {
          setNews(data.articles);
        } else {
          setNews(data.sources);
        }
        setSwitchToSearch(true);
        handleClose();
      });
  };
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      {news ? (
        <div>
          <h1 id="heading" className="text-primary text-center">
            Dashboard
          </h1>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title id="filter">Filter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Endpoints:{' '}
              <ButtonGroup>
                <Button
                  color="primary"
                  onClick={() => setEndPoint(1)}
                  active={endPoint === 1}
                >
                  Today Trending
                </Button>
                <Button
                  color="primary"
                  onClick={() => setEndPoint(2)}
                  active={endPoint === 2}
                >
                  Everything
                </Button>
                <Button
                  color="primary"
                  onClick={() => setEndPoint(3)}
                  active={endPoint === 3}
                >
                  Sources
                </Button>
              </ButtonGroup>
              {/* <InputGroup className="my-3">
                <FormControl
                  placeholder="Country Code"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={newSource !== '' || endPoint === 2}
                />
              </InputGroup> */}
              <div class="form-group">
                <label for="exampleFormControlSelect1">Country:</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={newSource !== '' || endPoint === 2}
                >
                  <option></option>
                  <option value="in">India</option>
                  <option value="us">Usa</option>
                  <option value="au">Australia</option>
                  <option value="jp">Japan</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Category:</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={newSource !== '' || endPoint === 2}
                >
                  <option></option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="general">General</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="sports">Sports</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
              {/* <InputGroup className="my-3">
                <FormControl
                  placeholder="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={newSource !== '' || endPoint === 2}
                />
              </InputGroup> */}
              <InputGroup className="my-3">
                <FormControl
                  placeholder="Sources"
                  disabled={endPoint === 2 || endPoint === 3}
                  onChange={(e) => setNewSource(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="my-3">
                <FormControl
                  placeholder="Query"
                  disabled={endPoint === 3}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="my-3">
                <FormControl
                  placeholder="Page Size"
                  disabled={endPoint === 3}
                  onChange={(e) => setPageSize(parseInt(e.target.value))}
                />
              </InputGroup>
              <InputGroup className="my-3">
                <FormControl
                  placeholder="Page No"
                  disabled={endPoint === 3}
                  onChange={(e) => setPageNo(parseInt(e.target.value))}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button id="submit" variant="primary" onClick={onSubmitFilter}>
                Search
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Search field */}
          <div
            className="d-flex justify-content-center search  mt-4"
            data-testid="container"
          >
            <input
              type="text"
              className="form-input=text mr-3 w-50"
              placeholder="Search..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Search
            </button>
          </div>
          {/* Categories */}
          {switchToSearch ? (
            Array.isArray(news) && news.length > 0 ? (
              <div className="container mt-3 text-center">
                {news.map((ele) => (
                  <Card news={ele} key={uuidv4()} />
                ))}
              </div>
            ) : (
              <h4 className="text-danger text-center mt-5">
                Cannot find the result
              </h4>
            )
          ) : (
            <div className="container mt-3 text-center">
              {/* <h2 className="text-info ">Trending News</h2> */}
              <nav aria-label="Page navigation example my-3">
                <ul className="pagination">
                  <li className="page-item todaytrending active">
                    <button
                      className="page-link "
                      href="#"
                      id="todaytrending"
                      onClick={() => handleCategories('todaytrending')}
                    >
                      Trending Now
                    </button>
                  </li>
                  <li className="page-item Health">
                    <button
                      className="page-link"
                      id="Health"
                      href="#"
                      onClick={() => handleCategories('Health')}
                    >
                      Health
                    </button>
                  </li>
                  <li className="page-item sports">
                    <button
                      className="page-link"
                      id="Sports"
                      href="#"
                      onClick={() => handleCategories('sports')}
                    >
                      Sports
                    </button>
                  </li>
                  <li className="page-item Technology">
                    <button
                      className="page-link"
                      id="Technology"
                      href="#"
                      onClick={() => handleCategories('Technology')}
                    >
                      Technology
                    </button>
                  </li>
                  {/* <li class="page-item saved">
                <a
                  class="page-link"
                  href="#"
                  onClick={() => handleCategories('saved')}
                >
                  Saved News
                </a>
              </li> */}
                </ul>
              </nav>
              {news.map((ele) => (
                <Card
                  news={ele}
                  saveFunction={saveFunction}
                  disableButton={true}
                  key={uuidv4()}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <h4 className="text-danger text-center mt-5">
          Sorry was not able to fetch data from server
        </h4>
      )}
    </div>
  );
}
