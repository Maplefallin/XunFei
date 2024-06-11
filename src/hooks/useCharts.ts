import * as echarts from 'echarts'
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from 'echarts/components'
import type { BarSeriesOption, LineSeriesOption } from 'echarts/charts'
import type { ComposeOption } from 'echarts/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

type Charts = echarts.ECharts
const chartsInit = (option: ECOption, mountedDom: HTMLDivElement): Charts => {
  const charts: Charts = echarts.init(mountedDom, option)
  return charts
}

const setOption = (option: ECOption, charts: Charts) => {
  charts.setOption(option)
}

export { chartsInit, setOption, type ECOption }
