CREATE TABLE "collab_component" ( -- 模块|Set_id
  "component_id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "user_id" INTEGER NOT NULL,
  "creation_time" NUMERIC NOT NULL,
  "set_id" INTEGER NOT NULL, -- 项目|select
  "title" TEXT NOT NULL, -- 标题|text
  "description" TEXT NOT NULL -- 描述|text
);

CREATE TABLE "collab_issue" ( -- 问题|Set_id
  "issue_id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "user_id" INTEGER NOT NULL,
  "creation_time" NUMERIC NOT NULL,
  "set_id" INTEGER NOT NULL, -- 项目|select
  "parent_issue_id" INTEGER NOT NULL, -- 上级问题|select
  "type" TEXT NOT NULL, -- 类型|select|enum('NewFeature','Defect','Enhancement','Task','SubTask')
  "priority" INTEGER NOT NULL, -- 优先级|select|1:lowest 2:low 3:normal 4:high 5:highest
  "component_id" INTEGER NOT NULL, -- 模块|select
  "status" TEXT NOT NULL, -- 状态|select|enum('New','Open','Pending','Closed','Fixed','Finished')
  "latest_action_time" NUMERIC NOT NULL, -- 最近变动时间|text
  "assignee_user_id" INTEGER NOT NULL, -- 当前经办人|select
  "finished_time" NUMERIC NOT NULL, -- 完成时间|text
  "title" TEXT NOT NULL, -- 标题|text
  "description" TEXT NOT NULL -- 描述|text
);

CREATE TABLE "collab_issue_action" ( -- 问题改动记录|Set_id
  "issue_action_id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "user_id" INTEGER NOT NULL,
  "creation_time" NUMERIC NOT NULL,
  "set_id" INTEGER NOT NULL, -- 项目|select
  "issue_id" INTEGER NOT NULL, -- 问题|select
  "description" TEXT NOT NULL -- 描述|text
);
