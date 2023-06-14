# Angular Nested Drag and Drop Sample Project

This repository contains a sample project for handling nested drag and drop functionality in Angular using CDK Material. The code is a practical implementation of a solution provided on this StackOverflow [thread](https://stackoverflow.com/questions/67337934/angular-nested-drag-and-drop-cdk-material-cdkdroplistgroup-cdkdroplist-nested/67337935).

## Problem Statement

CDK Material's `cdkDropListGroup` does not natively support nested drop lists. The ordering of lists affects drop behavior, and sorting within a nested drop list may not work as expected.

## Solution

This project provides a workaround by creating a service that determines the correct `cdkDropList` while dragging. It connects the drop lists with the `[cdkDropListConnectedTo]` binding and introduces several methods to handle drag and drop operations.

## Project Structure

The project mainly includes two parts:

- `DragDropService`: A service that registers `cdkDropList`s, determines the correct `cdkDropList` beneath the mouse pointer during a drag operation, and resets the current drop list when the drag operation is released.
- `FormContainerComponent`: A component that handles drag and drop operations and determines whether a drop operation is allowed at a particular position.

## Usage

To utilize this code, clone the repository and use the classes as described in the code comments. Please note that this code is a simplified demonstration of a larger concept, and some parts might not be fully functional.

## Disclaimer

This code was created in 2019 as a part of a personal project during a period of illness. Therefore, some sections might not adhere to the best practices. The code is intended to serve as a starting point and should be refined and customized as per the specific requirements of your project.

## Acknowledgments

The creation of this project was significantly influenced by the discussions in these posts:

- [GitHub Issue](https://github.com/angular/components/issues/14093#issuecomment-462395200)
- [StackOverflow Post](https://stackoverflow.com/a/59758611/4549486)

## License

This project is open-sourced under the MIT License. Please check the LICENSE file for more details.

