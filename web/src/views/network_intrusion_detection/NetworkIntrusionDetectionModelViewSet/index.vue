<template>
  <div>
    <el-row gutter="15" class="mb-15">
      <el-col :span="12">
        <el-card class="card-itme">
          <el-row>
            <el-col :span="24" justify="center" align="center">
              <el-text class="mx-1" tag="b" size="large">网络入侵事件统计</el-text>
            </el-col>
          </el-row>
          <el-row>
            <!-- 后门攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="400" color="#28a745" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #28a745">后门攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- DoS攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="220" color="#dc3545" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #dc3545">DoS攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- DDoS攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="150" color="#6f42c1" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #6f42c1">DDoS攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- SQL注入攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="110" color="#fd7e14" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #fd7e14">SQL注入攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- 中间人攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="80" color="#17a2b8" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #17a2b8">中间人攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- 密码攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="100" color="#ffc107" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #ffc107">密码攻击</el-text>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <!-- 勒索病毒 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="120" color="#795548" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #795548">勒索病毒</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- 扫描攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="90" color="#343a40" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #343a40">扫描攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- 命令注入 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="50" color="#6c757d" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #6c757d">命令注入</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- XSS攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="60" color="#28a745" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #28a745">XSS攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- APT攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="40" color="#dc3545" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #dc3545">APT攻击</el-text>
                </el-col>
              </el-row>
            </el-col>

            <!-- 其他攻击 -->
            <el-col :span="4" justify="center" align="center">
              <el-row>
                <el-col :span="24">
                  <e-digital-flop font-size="50" :value="20" color="#007bff" />
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-text class="mx-1" tag="b" size="large" style="color: #007bff">其他攻击</el-text>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="card-item">
          <div ref="totalChartRef" style="width: 100%; height: 203px"></div>
        </el-card>
      </el-col>
    </el-row>

    <el-row gutter="15" class="mb-15">
      <el-col :span="6">
        <el-card class="card-item">
          <el-text class="mx-1" tag="b" size="large">模型二分类效果</el-text>
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
      <el-col :span="6">
        <el-card class="card-item">
          <el-text class="mx-1" tag="b" size="large">模型多分类效果</el-text>
          <el-row class="mt-15">
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" stroke-color="#fff" :percentage="96">
                <template #default="{ percentage }">
                  <span class="percentage-value" style="color: #409eff">{{ percentage }}%</span>
                  <span class="percentage-label" style="color: #409eff">精确率</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" :percentage="96" status="success">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">召回率</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" :percentage="96" status="warning">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">准确率</span>
                </template>
              </el-progress>
            </el-col>
            <el-col :span="12" justify="center" align="center">
              <el-progress type="dashboard" stroke-width="10" :percentage="96" status="exception">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">F1得分</span>
                </template>
              </el-progress>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="card-item">
          <el-text class="mx-1" tag="b" size="large">网络入侵事件处理进度</el-text>
          <el-progress :text-inside="true" :stroke-width="25" :percentage="31" status="exception" striped-flow
            :duration="10" class="mt-15">
            <span>后门攻击 31%</span>
          </el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="41" status="exception" striped-flow
            :duration="10" class="mt-15">
            <span>DoS攻击 41%</span>
          </el-progress>
          <el-progress :text-inside="true" :stroke-width="25" :percentage="61" status="warning" striped-flow
            :duration="10" class="mt-15">
            <span>DDoS攻击 61%</span>
          </el-progress>
          <el-progress :text-inside="true" :stroke-width="25" :percentage="71" status="warning" striped-flow
            :duration="10" class="mt-15">
            <span>SQL注入攻击 71%</span>
          </el-progress>
          <el-progress :text-inside="true" :stroke-width="25" :percentage="91" striped-flow :duration="10"
            status="successful" class="mt-15">
            <span>中间人攻击 91%</span>
          </el-progress>
          <el-progress :text-inside="true" :stroke-width="25" :percentage="95" striped-flow :duration="10"
            status="success" class="mt-15">
            <span>密码攻击 95%</span>
          </el-progress>
          <el-progress :text-inside="true" :stroke-width="25" :percentage="97" striped-flow :duration="10"
            status="success" class="mt-15">
            <span>勒索病毒 97%</span>
          </el-progress>
        </el-card>
      </el-col>
    </el-row>

    <el-row gutter="15" class="mb-15">
      <el-col :span="24">
        <el-card class="card-itme">
          <el-text class="mx-1" tag="b" size="large">最新网络入侵告警</el-text>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="时间" width="200" />
            <el-table-column prop="src_node" label="源节点" width="150" />
            <el-table-column prop="dst_node" label="目标节点" width="150" />
            <el-table-column prop="src_ip" label="源IP地址" width="150" />
            <el-table-column prop="dst_ip" label="目标IP地址" width="150" />
            <el-table-column prop="src_port" label="源端口号" width="150" />
            <el-table-column prop="dst_port" label="目标端口号" width="150" />
            <el-table-column prop="attack_type" label="攻击类型" width="150" />

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
  name: "NetworkIntrusionDetectionModelViewSet",
  components: {
    EDigitalFlop,
    EWaterLevelPond,
  },
  setup() {
    const totalChartRef = ref<HTMLDivElement | null>(null);
    const heatmapChartRef = ref<HTMLDivElement | null>(null);
    const gradientChartRef = ref<HTMLDivElement | null>(null);

    let totalChart: echarts.ECharts | null = null;
    let heatmapChart: echarts.ECharts | null = null;
    let gradientChart: echarts.ECharts | null = null;

    const generateDate = () => {
      const now = new Date();
      return now.toLocaleString("zh-CN", { hour12: false });
    };

    const tableData = ref([
      {
        date: generateDate(), // 生成当前时间
        src_node: "测试节点01",
        dst_node: "测试节点02",
        src_ip: "192.168.1.1",
        dst_ip: "192.168.1.2",
        src_port: "8080",
        dst_port: "443",
        attack_type: "SQL注入",
      },
      {
        date: generateDate(), // 生成当前时间
        src_node: "测试节点03",
        dst_node: "测试节点04",
        src_ip: "192.168.2.1",
        dst_ip: "192.168.2.2",
        src_port: "22",
        dst_port: "80",
        attack_type: "DDoS",
      },
    ]);



    const initCharts = () => {
      if (totalChartRef.value) {
        if (totalChart) {
          totalChart.dispose();
        }
        totalChart = echarts.init(totalChartRef.value);
        const totalOption = {
          title: {
            text: "网络流量汇总",
            textStyle: {
              fontSize: 16, // 设置标题文字大小
            },
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["入站流量", "出站流量"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: Array.from({ length: 10 }, (_, i) => `${i + 1}秒`),
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "入站流量",
              type: "line",
              data: Array(10).fill(0),
            },
            {
              name: "出站流量",
              type: "line",
              data: Array(10).fill(0),
            },
          ],
        };
        totalChart.setOption(totalOption);

        setInterval(() => {
          const newInbound = Math.round(Math.random() * 100);
          const newOutbound = Math.round(Math.random() * 100);
          const newTime = new Date().toLocaleTimeString();

          totalOption.xAxis.data.shift();
          totalOption.xAxis.data.push(newTime);
          totalOption.series[0].data.shift();
          totalOption.series[0].data.push(newInbound);
          totalOption.series[1].data.shift();
          totalOption.series[1].data.push(newOutbound);

          totalChart?.setOption(totalOption);
        }, 1000);
      }
    };

    const initHeatmap = () => {
      if (heatmapChartRef.value) {
        if (heatmapChart) {
          heatmapChart.dispose();
        }
        heatmapChart = echarts.init(heatmapChartRef.value);

        const cities = ["北京", "上海", "广州", "深圳", "武汉"];
        const hosts = Array.from({ length: 5 }, (_, i) => `节点${i + 1}`);
        const data = [];

        for (let i = 0; i < cities.length; i++) {
          for (let j = 0; j < hosts.length; j++) {
            data.push([
              i,
              j,
              Math.round(Math.random() * 100), // 模拟流量数据
            ]);
          }
        }

        const heatmapOption = {
          title: {
            text: "节点流量热力图",
            textStyle: {
              fontSize: 16, // 设置标题文字大小
            },
          },
          tooltip: {
            position: "bottom",
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: hosts,
            axisLabel: {
              interval: 0,
            },
          },
          yAxis: {
            type: "category",
            data: cities,
            inverse: true,
            axisLabel: {
              interval: 0,
            },
          },
          visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: "horizontal",
            left: "center",
            top: "0%",
          },
          series: [
            {
              name: "流量",
              type: "heatmap",
              data: data,
              label: {
                show: true,
                formatter: ({ value }) => `${value[2]}`,
              },
            },
          ],
        };

        heatmapChart.setOption(heatmapOption);
      }
    };

    const initGradientChart = () => {
      if (gradientChartRef.value) {
        if (gradientChart) {
          gradientChart.dispose();
        }
        gradientChart = echarts.init(gradientChartRef.value);

        // 模拟数据
        const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
        const eventTypes = [
          "后门攻击",
          "DoS攻击",
          "DDoS攻击",
          "SQL注入攻击",
          "中间人攻击",
        ];
        const colors = ["#ff6f00", "#ffab00", "#f57f17", "#ff8f00", "#ff5722"];

        const generateRandomData = () =>
          Array.from({ length: 7 }, () => Math.round(Math.random() * 100));

        const seriesData = eventTypes.map((eventType, index) => ({
          name: eventType,
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: generateRandomData(),
          // 渐变色
          lineStyle: {
            width: 1,
            opacity: 0.5,
          },
          itemStyle: {
            color: colors[index],
          },
        }));

        const gradientChartOption = {
          title: {
            text: "本周告警事件统计",
            textStyle: {
              fontSize: 16,
            },
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: eventTypes,
            show: false, // 隐藏图例
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: days,
          },
          yAxis: {
            type: "value",
          },
          series: seriesData,
        };

        gradientChart.setOption(gradientChartOption);
      }
    };

    onMounted(() => {
      initCharts();
      initHeatmap();
      initGradientChart();
    });

    onActivated(() => {
      initCharts();
      initHeatmap();
      initGradientChart();
    });

    onBeforeUnmount(() => {
      if (totalChart) {
        totalChart.dispose();
      }

      if (heatmapChart) {
        heatmapChart.dispose();
      }

      if (gradientChart) {
        gradientChart.dispose();
      }
    });

    return {
      tableData,
      totalChartRef,
      heatmapChartRef,
      gradientChartRef,
    };
  },
});

const handleClick = () => {
  console.log('click')
}
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
