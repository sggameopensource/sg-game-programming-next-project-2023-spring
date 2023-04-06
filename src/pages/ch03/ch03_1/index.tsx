import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import Icon from './Icon';
import Style from './Style';
import UsingIcon from './UsingIcon';
import UsingIconWithCssClass from './UsingIconWithCssClass';
import Bootstrap from './Bootstrap';


export default function CH03() {
  return (
    <div>
      <Bootstrap />
      <UsingIconWithCssClass />
      <UsingIcon />
      <Style />
      <Icon />
    </div>
  )
}
