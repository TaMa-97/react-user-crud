import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./types";

const UserList: React.FC = () => {
  // 初期値は空の配列
  const [users, setUsers] = useState<User[]>([]);

  // # useEffectの実行タイミング制御（Reactのレンダリングの結果に基づいて何かを実行するために使用していく）
  // useEffectの第二引数（依存配列）によってタイミングを制御できる
  // 省略した場合：コンポーネントが更新されるたびに実行
  // 空配列（[]）とした場合：マウントとアンマウント時にのみ実行
  // 特定の値を指定した場合：その値が変更されたときに実行

  // マウント後に実行
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((response) => {
      setUsers(response.data);
    });
  }, []); // マウントとアンマウント時にのみ実行

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
