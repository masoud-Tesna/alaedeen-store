import React, { useEffect, useState } from "react";

import axios                   from "axios";

import { useRecoilValue } from "recoil";

import { CheckLanguage } from '../recoil-atoms/Atoms'

export class Translate extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      translate: ""
    }
  }

  componentDidMount () {
    const variable = this.props.variable;

    const prefix = this.props.prefix || 'store';

    const delim = this.props.delim || '.';

    const lang = this.props.lang;

    axios.get(`https://hornb2b.com/horn/translate-api/?var=${variable}&lang=${lang}&prefix=${prefix}&delim=${delim}`)
    .then(res => {
      this.setState({
        translate: res.data.value
      });
    });
  }

  render () {
    return this.state.translate;
  }
}

export function useTranslate(variable, prefix = 'store', delim = '.') {

  const [translate, setTranslate] = useState('');

  const lang = useRecoilValue(CheckLanguage);

  useEffect(function getLang() {
    axios.get(`https://hornb2b.com/horn/translate-api/?var=${variable}&lang=${lang}&prefix=${prefix}&delim=${delim}`)
    .then(res => {
      setTranslate(res.data.value);
    });
  }, [variable, prefix, delim]);


  return translate;
}

export function StripHtml(strip) {
  const regex = /(<([^>]+)>)/ig;
  return strip.replace(regex, '');
};