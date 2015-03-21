CREATE TABLE "collab_component" ( -- 模块|SetID
  "ComponentID" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "UserID" INTEGER NOT NULL,
  "CreationTime" NUMERIC NOT NULL,
  "SetID" INTEGER NOT NULL, -- 项目|select
  "Title" TEXT NOT NULL, -- 标题|text
  "Description" TEXT NOT NULL -- 描述|text
);

CREATE TABLE "collab_issue" ( -- 问题|SetID
  "IssueID" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "UserID" INTEGER NOT NULL,
  "CreationTime" NUMERIC NOT NULL,
  "SetID" INTEGER NOT NULL, -- 项目|select
  "ParentIssueID" INTEGER NOT NULL, -- 上级问题|select
  "Type" TEXT NOT NULL, -- 类型|select|enum('NewFeature','Defect','Enhancement','Task','SubTask')
  "Priority" INTEGER NOT NULL, -- 优先级|select|1:lowest 2:low 3:normal 4:high 5:highest
  "ComponentID" INTEGER NOT NULL, -- 模块|select
  "Status" TEXT NOT NULL, -- 状态|select|enum('New','Open','Pending','Closed','Fixed','Finished')
  "LatestActionTime" NUMERIC NOT NULL, -- 最近变动时间|text
  "AssigneeUserID" INTEGER NOT NULL, -- 当前经办人|select
  "FinishedTime" NUMERIC NOT NULL, -- 完成时间|text
  "Title" TEXT NOT NULL, -- 标题|text
  "Description" TEXT NOT NULL -- 描述|text
);

CREATE TABLE "collab_issue_action" ( -- 问题改动记录|SetID
  "IssueActionID" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "UserID" INTEGER NOT NULL,
  "CreationTime" NUMERIC NOT NULL,
  "SetID" INTEGER NOT NULL, -- 项目|select
  "IssueID" INTEGER NOT NULL, -- 问题|select
  "Description" TEXT NOT NULL -- 描述|text
);
