import { Icon } from "@iconify/react";

export const widgetMenu = [
  {
    title: 'New Message',
    icon: <Icon icon="pajamas:comment-dots" className=' w-[18px] h-auto' />,
    result: 85,
    type: "progress",
    chart_data: {
      desc: "Response Rate",
      chart_result: "75%",
    }
  },
  {
    title: 'Leads',
    icon: <Icon icon="qlementine-icons:items-grid-small-24" className=' w-[18px] h-auto' />,
    result: 85,
    type: "pie-chart",
    chart_data: {
      chart_result: "63%",
      daily: "60%",
      weekly: "72",
    }
  },
  {
    title: 'New Message',
    icon: <Icon icon="pajamas:comment-dots" className=' w-[18px] h-auto' />,
    result: 85,
    type: "progress",
    chart_data: {
      desc: "Response Rate",
      chart_result: "75%",
    }
  },
]

export const lineChart = [
  { name: 'Text', value1: 550, value2: 600 },
  { name: 'Text', value1: 990, value2: 900 },
  { name: 'Text', value1: 50, value2: 290 },
  { name: 'Text', value1: 150, value2: 300 },
  { name: 'Text', value1: 760, value2: 620 },
  { name: 'Text', value1: 290, value2: 80 },
  { name: 'Text', value1: 150, value2: 120 },
  { name: 'Text', value1: 800, value2: 180 },
  { name: 'Text', value1: 550, value2: 650 },
  { name: 'Text', value1: 220, value2: 820 },
  { name: 'Text', value1: 400, value2: 80 },
  { name: 'Text', value1: 390, value2: 890 },
  { name: 'Text', value1: 20, value2: 240 },
  { name: 'Text', value1: 870, value2: 290 },
  { name: 'Text', value1: 700, value2: 920 },
];
