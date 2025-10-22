import mysql.connector
import pandas as pd

# 连接到 MySQL 数据库
conn = mysql.connector.connect(
    host="localhost",  # MySQL 服务器地址
    user="root",  # 替换为你的 MySQL 用户名
    password="13995587349",  # 替换为你的 MySQL 密码
    database="tongji"  # 连接的数据库名称
)

# 创建游标
cursor = conn.cursor()

# 读取 CSV 文件
csv_file_path = './NF-ToN-IoT.csv'  # CSV 文件路径
df = pd.read_csv(csv_file_path)
df = df.head(300)

# 映射关系：CSV 文件中的字段名 -> 数据库表的字段名
field_mapping = {
    "IPV4_SRC_ADDR": "src_ip",
    "L4_SRC_PORT": "src_port",
    "IPV4_DST_ADDR": "dst_ip",
    "L4_DST_PORT": "dst_port",
    "PROTOCOL": "protocol",
    "L7_PROTO": "traffic_type",
    "IN_BYTES": "in_bytes",
    "OUT_BYTES": "out_bytes",
    "IN_PKTS": "in_pkts",
    "OUT_PKTS": "out_pkts",
    "TCP_FLAGS": "tcp_flag",
    "FLOW_DURATION_MILLISECONDS": "flow_duration",
    "Label": "attack_type",
    "Attack": "traffic_type"
}

# 处理每一行数据，并插入到数据库
for _, row in df.iterrows():
    # 根据字段映射构建插入的数据字典
    data = {field_mapping[key]: row[key] for key in row.index if key in field_mapping}
    data["src_node"] = "测试节点01"
    data["dst_node"] = "测试节点02"
    data["modifier"] = "1"
    data["creator_id"] = "1"
    data["dept_belong_id"] = "1"
    data["create_datetime"] = "2025-01-27T19:42:03.741745"
    data["update_datetime"] = "2025-01-27T19:42:03.741745"
    data["description"] = "测试数据"

    # 构建 SQL 插入语句
    insert_query = """
        INSERT INTO network_traffic (
            src_ip, dst_ip, src_port, dst_port, protocol, flow_duration,
            in_bytes, out_bytes, in_pkts, out_pkts, tcp_flag, traffic_type,
            attack_type, src_node, dst_node, create_datetime, update_datetime,
            creator_id, dept_belong_id, modifier, description
        ) VALUES (
            %(src_ip)s, %(dst_ip)s, %(src_port)s, %(dst_port)s, %(protocol)s, %(flow_duration)s,
            %(in_bytes)s, %(out_bytes)s, %(in_pkts)s, %(out_pkts)s, %(tcp_flag)s, %(traffic_type)s,
            %(attack_type)s, %(src_node)s, %(dst_node)s, %(create_datetime)s, %(update_datetime)s,
            %(creator_id)s, %(dept_belong_id)s, %(modifier)s, %(description)s
        )
    """

    # 执行插入操作
    cursor.execute(insert_query, data)

# 提交事务
conn.commit()

# 关闭游标和连接
cursor.close()
conn.close()

print("数据插入成功！")
