# Skill: Linear Vector Icon Designer (线性矢量图标设计师)

This skill file provides a set of design principles, instructions, and examples for AI agents to generate visually consistent, modern, 24x24px linear vector icons in SVG format. 

By loading this skill, any AI agent can design new icons that perfectly match the visual language of the Seeed Studio Design System (SDS) icon pack.

---

## 1. Icon Design System Specifications (设计规范)

All icons created under this skill MUST adhere strictly to the following parameters:

| Parameter | Value | Description |
| :--- | :--- | :--- |
| **ViewBox** | `0 0 24 24` | Universal grid layout. All coordinates must stay within this range. |
| **Default Color** | `#4E5868` | Slate Grey (Primary strokes). Neutral and clean. |
| **Accent Color** | `#8FC31F` | Lime Green (Accent/Highlight details). Used for high-interest nodes. |
| **Stroke Width** | `1.5px` | Uniform line weight across all paths. No exceptions. |
| **Stroke Caps/Joins** | `round` | `stroke-linecap="round"` and `stroke-linejoin="round"` for premium look. |
| **Fills** | `none` | All paths must be stroke-only. No solid fills unless specified. |

---

## 2. SVG Semantic Layer Structure (图层结构)

To support real-time customization (coloring, sizing, border toggling), every SVG must use semantic class names instead of hardcoded attributes:

1. **Outer Border (可选圆环)**:
   - Path: `<circle class="svg-border" cx="12" cy="12" r="11" fill="none" />`
   - Used for optional visual bounding. Can be hidden/styled.
2. **Primary Elements (主体线条)**:
   - Class: `class="svg-primary"`
   - Used for the main shape of the icon metaphor (e.g., chip body, umbrella frame).
3. **Accent Elements (高亮细节)**:
   - Class: `class="svg-accent"`
   - Used for key features, sparks, lines, or details that draw attention (e.g., rocket flame, neural nodes).

### Clean SVG Code Requirement
Do NOT include inline styles (`style="..."`), hardcoded stroke colors (`stroke="#..."`), or stroke widths (`stroke-width="..."`). Other systems or customizer tools will inject these dynamically using the classes.

---

## 3. Step-by-Step Icon Design Process for AI (设计流程)

When asked to design a new icon, follow this workflow:

1. **Conceptualization (概念推演)**:
   - Analyze the feature description.
   - Select 1 core metaphor for the **Primary** structure (e.g. "Battery" for battery specs).
   - Select 1-2 details for the **Accent** structure (e.g. "Charging bolt" and "Sparkle star").
2. **Coordinate Mapping (坐标打点)**:
   - Map points to a 24x24 grid.
   - Keep shapes centered (`cx=12`, `cy=12`).
   - Use half-pixels for slanted lines to maintain perfect sharpness.
3. **SVG Drafting (路径生成)**:
   - Use standard `<path>`, `<rect>`, `<circle>`, `<line>` tags.
   - Prefer simple closed paths to minimize size.
4. **Validation (校验)**:
   - Ensure classes are correctly assigned.
   - Check that all paths have `fill="none"`.

---

## 4. Design Metaphor Cheat Sheet (隐喻参考)

| Topic | Primary Metaphor | Accent Metaphor |
| :--- | :--- | :--- |
| **Hardware Specs** | Outer casing, physical cards, slots | Pins, ports, microchips |
| **AI / Computing** | Silicon chip, processors, dashboards | Nodes, data connections, speed sweeps |
| **Energy / Battery** | Cylinders, cells, battery blocks | Lightning bolts, electricity waves, stars |
| **Software / Integration** | Device frames, code tags, gears | Signal waves, sliders, indicators |
| **Services / Operations** | Globes, boxes, storefronts | Headsets, checkmarks, arrows, document seals |

---

## 5. Reference Code Examples (标准示例代码)

Use these reference implementations as your stylistic baseline:

### Example A: Developer Friendly (开发者友好)
*Metaphor*: Code brackets (Primary) with a graduation cap (Accent).
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
    <!-- Graduation Cap (Accent) -->
    <path class="svg-accent" d="M12 3l7 3-7 3-7-3 7-3z" />
    <path class="svg-accent" d="M8 7.5v2a4 4 0 0 0 8 0v-2" />
    <path class="svg-accent" d="M19 6v3" />
    <circle class="svg-accent" cx="19" cy="9.5" r="0.5" />
    <!-- Code Brackets (Primary) -->
    <path class="svg-primary" d="M7 12l-3 3 3 3" />
    <path class="svg-primary" d="M17 12l3 3-3 3" />
    <line class="svg-primary" x1="13" y1="11" x2="11" y2="19" />
</svg>
```

### Example B: Waterproof & Dustproof (防尘防水)
*Metaphor*: Weather umbrella (Primary) with raindrops (Accent).
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle class="svg-border" cx="12" cy="12" r="11" fill="none" />
    <!-- Umbrella Canopy & Handle (Primary) -->
    <path class="svg-primary" d="M4 14a8 8 0 0 1 16 0c-1.5-1-3.5-1-5 0-1.5-1-3.5-1-5 0-1.5-1-3.5-1-6 0z" />
    <path class="svg-primary" d="M12 14v5a2 2 0 0 1-4 0" />
    <path class="svg-primary" d="M12 6V4" />
    <!-- Raindrops (Accent) -->
    <path class="svg-accent" d="M9 2.5l-1 2 M13 2l-1 2 M17 2.5l-1 2" />
</svg>
```

---

## 6. How to Invoke This Skill in AI (如何调用此技能)

When instructing an AI to design a new icon, paste this system prompt:
```text
System Prompt: Refer to the design system in [linear-icon-design-skill.md](file:///C:/Users/Administrator/.gemini/antigravity-ide/scratch/svg-icon-exporter/linear-icon-design-skill.md). Design an icon for "[Icon Title]" ([Description]). Use the viewBox 0 0 24 24. Return only the raw SVG tags utilizing `svg-border`, `svg-primary`, and `svg-accent` classes, with NO hardcoded color/width styles.
```
