import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './mapping'

import Reduxing from '../components/reduxing'
//连接Reduxing组件
let reduxingData = connect(mapStateToProps, mapDispatchToProps)(Reduxing)

export default reduxingData