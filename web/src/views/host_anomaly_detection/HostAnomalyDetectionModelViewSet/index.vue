<template>
  <div>
    <el-row gutter="15" class="mb-15">
      <el-col :span="12" justify="center" align="center">
        <el-card class="card-item">
          <el-text class="mx-1" tag="b" size="large">节点总览</el-text>
          <el-row>
            <el-col :span="8" justify="center" align="center">
              <e-digital-flop font-size="76" :value="5" color="#007bff" />
            </el-col>
            <el-col :span="8" justify="center" align="center">
              <e-digital-flop font-size="76" :value="0" color="#E6A23C" />
            </el-col>
            <el-col :span="8" justify="center" align="center">
              <e-digital-flop font-size="76" :value="1" color="#F56C6C" />
            </el-col>
          </el-row>
          <el-row style="height: 45px;">
            <el-col :span="8" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #007bff">在线节点</el-text>
            </el-col>
            <el-col :span="8" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #E6A23C">离线节点</el-text>
            </el-col>
            <el-col :span="8" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #F56C6C">故障节点</el-text>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12" justify="center" align="center">
        <el-card class="card-item">
          <el-text class="mx-1" tag="b" size="large">节点状态</el-text>
          <el-row style="height: 45px;">
            <el-col :span="24" justify="center" align="center">
              <el-select v-model="value" placeholder="测试节点01">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" justify="center" align="center">
              <e-water-level-pond :waveColors="['#007bff', '#b0e0ff']" duration="0" style="width:80px;height:80px;"
                :value="89" />
            </el-col>
            <el-col :span="6" justify="center" align="center">
              <e-water-level-pond :waveColors="['#E6A23C', '#b0e0ff']" duration="0" style="width:80px;height:80px;"
                :value="69" />
            </el-col>
            <el-col :span="6" justify="center" align="center">
              <e-water-level-pond :waveColors="['#F56C6C', '#b0e0ff']" duration="0" style="width:80px;height:80px;"
                :value="76" />
            </el-col>
            <el-col :span="6" justify="center" align="center">
              <e-water-level-pond :waveColors="[' #67C23A', '#b0e0ff']" duration="0" style="width:80px;height:80px;"
                :value="78" />
            </el-col>
          </el-row>
          <el-row class="mt-15">
            <el-col :span="6" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #007bff">CPU使用率</el-text>
            </el-col>
            <el-col :span="6" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #E6A23C">内存使用率</el-text>
            </el-col>
            <el-col :span="6" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #F56C6C">1分钟系统平均负载</el-text>
            </el-col>
            <el-col :span="6" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large" style="color: #67C23A">5分钟系统平均负载</el-text>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="6" justify="center" align="center">
        <el-card class="card-item">
          <el-text class="mx-1" tag="b" size="large">模型效果</el-text>
          <el-row class="mt-15">
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" stroke-color="#fff" :percentage="97">
                <template #default="{ percentage }">
                  <span class="percentage-value" style="color: #409eff">{{ percentage }}%</span>
                  <span class="percentage-label" style="color: #409eff">精确率</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" :percentage="98" status="success">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">召回率</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" :percentage="98" status="warning">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">准确率</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" :percentage="97" status="exception">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">F1得分</span>
                </template>
              </el-progress>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8" justify="center" align="center">
        <el-card class="card-item">
          <div ref="barChartRef" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>
      <el-col :span="10" justify="center" align="center">
        <el-card class="card-item">
          <div ref="lineChartRef" style="width: 100%; height: 300px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row gutter="15" class="mb-15">
      <el-col :span="24">
        <el-card class="card-itme">
          <el-text class="mx-1" tag="b" size="large">最新节点负载异常告警</el-text>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="time" label="时间" width="200" />
            <el-table-column prop="node" label="节点" width="150" />
            <el-table-column prop="cpu_usage" label="CPU使用率" width="150" />
            <el-table-column prop="memory_usage" label="内存使用率" width="150" />
            <el-table-column prop="disk_usage" label="磁盘使用率" width="150" />
            <el-table-column prop="interrupts" label="系统中断次数" width="150" />
            <el-table-column prop="load_1m" label="1分钟系统负载" width="150" />
            <el-table-column prop="status" label="运行状态" width="150" />

            <!-- 操作列 -->
            <el-table-column fixed="right" label="操作" min-width="200">
              <template #default="{ row }">
                <el-button link type="primary" size="small" @click="handleDetail(row)">
                  详情
                </el-button>
                <el-button link type="success" size="small" @click="handleProcess(row)">
                  处理
                </el-button>
                <el-button link type="warning" size="small" @click="handleResolve(row)">
                  标记已解决
                </el-button>
                <el-button link type="danger" size="small" @click="handleDelete(row)">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
import {
  onMounted,
  onBeforeUnmount,
  onActivated,
  defineComponent,
  ref,
} from "vue";
import * as echarts from "echarts";
import { EDigitalFlop, EWaterLevelPond } from "e-datav-vue3";

export default defineComponent({
  name: "HostAnomalyDetectionModelViewSet",
  components: {
    EDigitalFlop,
    EWaterLevelPond,
  },
  setup() {
    const barChartRef = ref<HTMLDivElement | null>(null);
    const lineChartRef = ref<HTMLDivElement | null>(null);

    let barChart: echarts.ECharts | null = null;
    let lineChart: echarts.ECharts | null = null;

    const generateDate = () => {
      const now = new Date();
      return now.toLocaleString("zh-CN", { hour12: false });
    };

    const tableData = ref([
  {
    time: generateDate(), // 生成当前时间
    node: "测试节点01",
    cpu_usage: "85%", // CPU 使用率
    memory_usage: "70%", // 内存使用率
    disk_usage: "65%", // 磁盘使用率
    interrupts: 120, // 系统中断次数
    load_1m: "1.2", // 1 分钟系统负载
    status: "异常",
  },
  {
    time: generateDate(),
    node: "测试节点02",
    cpu_usage: "90%",
    memory_usage: "80%",
    disk_usage: "75%",
    interrupts: 135,
    load_1m: "1.5",
    status: "异常",
  },
  {
    time: generateDate(),
    node: "测试节点03",
    cpu_usage: "95%",
    memory_usage: "85%",
    disk_usage: "78%",
    interrupts: 150,
    load_1m: "1.8",
    status: "异常",
  },
]);

    const initBarChart = () => {
      const chart = echarts.init(barChartRef.value);

      const options = {
        title: {
          text: '各节点负载异常事件统计',
          left: 'center',
          textStyle: {
            color: '#000' // 标题黑色
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            color: '#000' // 提示框文字黑色
          }
        },
        legend: {
          data: ['异常事件数量'],
          bottom: '0',
          textStyle: {
            color: '#000' // 图例黑色
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['节点1', '节点2', '节点3', '节点4', '节点5'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            color: '#000' // X轴文字黑色
          }
        },
        yAxis: {
          type: 'value',
          name: '事件数量',
          nameTextStyle: {
            color: '#000' // Y轴名称黑色
          },
          axisLabel: {
            color: '#000' // Y轴文字黑色
          }
        },
        series: [
          {
            name: '异常事件数量',
            type: 'bar',
            barWidth: '60%',
            color: '#409EFF',
            data: [10, 15, 9, 20, 12]
          }
        ],
        textStyle: {
          color: '#000' // 全局文本黑色
        }
      };

      chart.setOption(options);
    };

    const initLineChart = () => {
      const chart = echarts.init(lineChartRef.value);

      const options = {
        title: {
          text: '负载异常历史趋势',
          left: 'center',
          textStyle: {
            color: '#000' // 标题黑色
          }
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            color: '#000' // 提示框文字黑色
          }
        },
        legend: {
          data: ['异常事件数量'],
          bottom: '0',
          textStyle: {
            color: '#000' // 图例黑色
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05', '2024-08-06', '2024-08-07'],
          axisLabel: {
            color: '#000' // X轴文字黑色
          }
        },
        yAxis: {
          type: 'value',
          name: '事件数量',
          nameTextStyle: {
            color: '#000' // Y轴名称黑色
          },
          axisLabel: {
            color: '#000' // Y轴文字黑色
          }
        },
        series: [
          {
            name: '异常事件数量',
            type: 'line',
            data: [12, 15, 11, 13, 16, 10, 9],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ],
        textStyle: {
          color: '#000' // 全局文本黑色
        }
      };

      chart.setOption(options);

      // 监听窗口大小变化，调整图表大小
      window.addEventListener('resize', () => {
        chart.resize();
      });
    };



    onMounted(() => {
      initBarChart();
      initLineChart();
    });

    onActivated(() => {
      initBarChart();
      initLineChart();
    });

    onBeforeUnmount(() => {
      if (barChart) {
        barChart.dispose();
      }

      if (lineChart) {
        lineChart.dispose();
      }
    });

    return {
      tableData,
      barChartRef,
      lineChartRef,
    };
  },
});
</script>

<style scoped lang="scss">
.mt-15 {
  margin-top: 15px;
}

.mb-15 {
  margin-bottom: 15px;
}

.card-item {
  width: 100%;
  min-height: 180px;
  overflow: hidden;
  padding: 10px;
}

.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 15px;
}
</style>