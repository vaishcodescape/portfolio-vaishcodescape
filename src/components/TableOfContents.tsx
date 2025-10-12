"use client";

import { Column, Row, Text } from "@once-ui-system/core";
import React, { useEffect, useState } from "react";

interface TableOfContentsProps {
  structure: Array<{
    title: string;
    display: boolean;
    items: string[];
  }>;
  about: any;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = structure
        .filter((section) => section.display)
        .map((section) => ({
          id: section.title,
          element: document.getElementById(section.title),
        }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [structure]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Column gap="24">
      {structure
        .filter((section) => section.display)
        .map((section, index) => (
          <Column key={index} gap="12">
            <Text
              variant="body-default-s"
              onBackground={
                activeSection === section.title ? "brand-weak" : "neutral-weak"
              }
              style={{
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              onClick={() => scrollToSection(section.title)}
            >
              {section.title}
            </Text>
            {about.tableOfContent.subItems &&
              section.items.length > 0 && (
                <Column gap="8" paddingLeft="12">
                  {section.items.map((item, itemIndex) => (
                    <Text
                      key={itemIndex}
                      variant="body-default-xs"
                      onBackground={
                        activeSection === item ? "brand-weak" : "neutral-weak"
                      }
                      style={{
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                      }}
                      onClick={() => scrollToSection(item)}
                    >
                      {item}
                    </Text>
                  ))}
                </Column>
              )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;

