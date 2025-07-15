import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../coreConcept/CoreConcept";
import Section from "../section/Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
