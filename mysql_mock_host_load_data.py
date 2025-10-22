import pandas as pd
import mysql.connector

# **1. 读取CSV文件**
csv_file = "machine-1-1_train.csv"  # 替换为你的 CSV 文件路径
df = pd.read_csv(csv_file, header=None)  # 读取 CSV（无列名）

# **2. 给CSV文件赋予正确的列名（按图片顺序）**
csv_columns = [
    "cpu_r", "load_1", "load_5", "load_15", "mem_shmem", "mem_u", "mem_u_e", "total_mem",
    "disk_q", "disk_r", "disk_rb", "disk_svc", "disk_u", "disk_w", "disk_wa", "disk_wb",
    "si", "so", "eth1_fi", "eth1_fo", "eth1_pi", "eth1_po", "tcp_tw", "tcp_use", "active_opens",
    "curr_estab", "in_errs", "in_segs", "listen_overflows", "out_rsts", "out_segs", "passive_opens",
    "retrans_segs", "tcp_timeouts", "udp_in_dg", "udp_out_dg", "udp_rcv_buf_errs", "udp_snd_buf_errs"
]
df.columns = csv_columns  # 赋值列名

# **3. 补充数据库中的其他字段**
db_columns = [
    "id", "description", "modifier", "dept_belong_id", "update_datetime", "create_datetime", "creator_id",
    "active_opens", "cpu_r", "curr_estab", "disk_q", "disk_r", "disk_rb", "disk_svc", "disk_u", "disk_w",
    "disk_wa", "disk_wb", "eth1_fi", "eth1_fo", "eth1_pi", "eth1_po", "host_name", "in_errs", "in_segs",
    "listen_overflows", "load_1", "load_15", "load_5", "mem_shmem", "mem_u", "mem_u_e", "out_rsts",
    "out_segs", "passive_opens", "retrans_segs", "si", "so", "status", "tcp_timeouts", "tcp_tw", "tcp_use",
    "total_mem", "udp_in_dg", "udp_out_dg", "udp_rcv_buf_errs", "udp_snd_buf_errs"
]

# **4. 给缺少的数据库字段填充默认值**
for col in db_columns:
    if col not in df.columns:
        df[col] = None  # 添加额外的数据库字段，填充默认值

# **特殊处理 host_name，确保它不会为空**
df["host_name"] = "测试节点01"
df['status'] = "正常"

# **5. 按数据库字段顺序重新排列DataFrame**
df = df[db_columns]

# **6. 连接 MySQL 并插入数据**
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="13995587349",
    database="tongji"
)
cursor = conn.cursor()

# **7. 插入数据**
insert_query = f"""
    INSERT INTO host_anomaly_detection ({', '.join(db_columns)}) 
    VALUES ({', '.join(['%s'] * len(db_columns))})
"""

for _, row in df.iterrows():
    cursor.execute(insert_query, tuple(row))

conn.commit()
cursor.close()
conn.close()

print("CSV 数据已成功插入数据库！")
